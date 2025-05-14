// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUserKubeConfigStatesResponseBodyPage } from "./ListUserKubeConfigStatesResponseBodyPage";
import { ListUserKubeConfigStatesResponseBodyStates } from "./ListUserKubeConfigStatesResponseBodyStates";


export class ListUserKubeConfigStatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  page?: ListUserKubeConfigStatesResponseBodyPage;
  /**
   * @remarks
   * The status of the kubeconfig files.
   */
  states?: ListUserKubeConfigStatesResponseBodyStates[];
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      states: 'states',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: ListUserKubeConfigStatesResponseBodyPage,
      states: { 'type': 'array', 'itemType': ListUserKubeConfigStatesResponseBodyStates },
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    if(Array.isArray(this.states)) {
      $dara.Model.validateArray(this.states);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

