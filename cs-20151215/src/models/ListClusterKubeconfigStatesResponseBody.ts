// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListClusterKubeconfigStatesResponseBodyPage } from "./ListClusterKubeconfigStatesResponseBodyPage";
import { ListClusterKubeconfigStatesResponseBodyStates } from "./ListClusterKubeconfigStatesResponseBodyStates";


export class ListClusterKubeconfigStatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  page?: ListClusterKubeconfigStatesResponseBodyPage;
  /**
   * @remarks
   * The status list of the kubeconfig files associated with the cluster.
   */
  states?: ListClusterKubeconfigStatesResponseBodyStates[];
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      states: 'states',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: ListClusterKubeconfigStatesResponseBodyPage,
      states: { 'type': 'array', 'itemType': ListClusterKubeconfigStatesResponseBodyStates },
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

