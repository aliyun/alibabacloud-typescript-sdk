// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectLogStoresResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the SLS project.
   * 
   * @example
   * cn-hangzhou.log.aliyuncs.com
   */
  endPoint?: string;
  /**
   * @remarks
   * The name of the region where the SLS project resides.
   * 
   * @example
   * hangzhou
   */
  localName?: string;
  /**
   * @remarks
   * The name of the SLS Logstore.
   * 
   * @example
   * cloud-siem-logstore
   */
  logStore?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to purchase Threat Analysis.
   * 
   * @example
   * 123XXXXXXXXX
   */
  mainUserId?: number;
  /**
   * @remarks
   * The name of the SLS project.
   * 
   * @example
   * cloud-siem-project
   */
  project?: string;
  /**
   * @remarks
   * The region where the SLS project resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the member account for which threat analysis is performed.
   * 
   * @example
   * 123XXXXXXXX
   */
  subUserId?: number;
  /**
   * @remarks
   * The name of the member account.
   * 
   * @example
   * sas_account_xxxx
   */
  subUserName?: string;
  static names(): { [key: string]: string } {
    return {
      endPoint: 'EndPoint',
      localName: 'LocalName',
      logStore: 'LogStore',
      mainUserId: 'MainUserId',
      project: 'Project',
      regionId: 'RegionId',
      subUserId: 'SubUserId',
      subUserName: 'SubUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endPoint: 'string',
      localName: 'string',
      logStore: 'string',
      mainUserId: 'number',
      project: 'string',
      regionId: 'string',
      subUserId: 'number',
      subUserName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectLogStoresResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListProjectLogStoresResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListProjectLogStoresResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

