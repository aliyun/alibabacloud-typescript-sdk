// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetClusterRunTimeInfoResponseBodyResultDataNodesConfigStatusList } from "./GetClusterRunTimeInfoResponseBodyResultDataNodesConfigStatusList";
import { GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusList } from "./GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusList";
import { GetClusterRunTimeInfoResponseBodyResultDataNodesServiceStatus } from "./GetClusterRunTimeInfoResponseBodyResultDataNodesServiceStatus";


export class GetClusterRunTimeInfoResponseBodyResultDataNodes extends $dara.Model {
  /**
   * @remarks
   * The configuration status.
   */
  configStatusList?: GetClusterRunTimeInfoResponseBodyResultDataNodesConfigStatusList[];
  /**
   * @remarks
   * The data of the Searcher worker.
   */
  dataStatusList?: GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusList[];
  /**
   * @remarks
   * The service status of the QRS worker.
   */
  serviceStatus?: GetClusterRunTimeInfoResponseBodyResultDataNodesServiceStatus;
  static names(): { [key: string]: string } {
    return {
      configStatusList: 'configStatusList',
      dataStatusList: 'dataStatusList',
      serviceStatus: 'serviceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configStatusList: { 'type': 'array', 'itemType': GetClusterRunTimeInfoResponseBodyResultDataNodesConfigStatusList },
      dataStatusList: { 'type': 'array', 'itemType': GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusList },
      serviceStatus: GetClusterRunTimeInfoResponseBodyResultDataNodesServiceStatus,
    };
  }

  validate() {
    if(Array.isArray(this.configStatusList)) {
      $dara.Model.validateArray(this.configStatusList);
    }
    if(Array.isArray(this.dataStatusList)) {
      $dara.Model.validateArray(this.dataStatusList);
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

