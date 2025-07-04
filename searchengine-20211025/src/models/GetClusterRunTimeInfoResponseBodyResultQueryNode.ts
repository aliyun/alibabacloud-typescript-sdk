// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetClusterRunTimeInfoResponseBodyResultQueryNodeConfigStatusList } from "./GetClusterRunTimeInfoResponseBodyResultQueryNodeConfigStatusList";
import { GetClusterRunTimeInfoResponseBodyResultQueryNodeServiceStatus } from "./GetClusterRunTimeInfoResponseBodyResultQueryNodeServiceStatus";


export class GetClusterRunTimeInfoResponseBodyResultQueryNode extends $dara.Model {
  /**
   * @remarks
   * The configuration status.
   */
  configStatusList?: GetClusterRunTimeInfoResponseBodyResultQueryNodeConfigStatusList[];
  /**
   * @remarks
   * The service status of the QRS worker.
   */
  serviceStatus?: GetClusterRunTimeInfoResponseBodyResultQueryNodeServiceStatus;
  static names(): { [key: string]: string } {
    return {
      configStatusList: 'configStatusList',
      serviceStatus: 'serviceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configStatusList: { 'type': 'array', 'itemType': GetClusterRunTimeInfoResponseBodyResultQueryNodeConfigStatusList },
      serviceStatus: GetClusterRunTimeInfoResponseBodyResultQueryNodeServiceStatus,
    };
  }

  validate() {
    if(Array.isArray(this.configStatusList)) {
      $dara.Model.validateArray(this.configStatusList);
    }
    if(this.serviceStatus && typeof (this.serviceStatus as any).validate === 'function') {
      (this.serviceStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

