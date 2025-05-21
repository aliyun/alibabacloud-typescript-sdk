// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResourceOverviewResponseBodyDataApi } from "./GetResourceOverviewResponseBodyDataApi";
import { GetResourceOverviewResponseBodyDataGateway } from "./GetResourceOverviewResponseBodyDataGateway";


export class GetResourceOverviewResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * API information.
   */
  api?: GetResourceOverviewResponseBodyDataApi;
  /**
   * @remarks
   * Gateway information.
   */
  gateway?: GetResourceOverviewResponseBodyDataGateway;
  static names(): { [key: string]: string } {
    return {
      api: 'api',
      gateway: 'gateway',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: GetResourceOverviewResponseBodyDataApi,
      gateway: GetResourceOverviewResponseBodyDataGateway,
    };
  }

  validate() {
    if(this.api && typeof (this.api as any).validate === 'function') {
      (this.api as any).validate();
    }
    if(this.gateway && typeof (this.gateway as any).validate === 'function') {
      (this.gateway as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

