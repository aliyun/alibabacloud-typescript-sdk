// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectLogStoresResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the Simple Log Service project.
   * 
   * @example
   * cn-hangzhou.log.aliyuncs.com
   */
  endPoint?: string;
  /**
   * @remarks
   * The name of the region in which the Simple Log Service project resides.
   * 
   * @example
   * hangzhou
   */
  localName?: string;
  /**
   * @remarks
   * The name of the Simple Log Service Logstore.
   * 
   * @example
   * cloud-siem-logstore
   */
  logStore?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to purchase the threat analysis feature.
   * 
   * @example
   * 123XXXXXXXXX
   */
  mainUserId?: number;
  /**
   * @remarks
   * The name of the Simple Log Service project.
   * 
   * @example
   * cloud-siem-project
   */
  project?: string;
  /**
   * @remarks
   * The ID of the region in which the Simple Log Service project resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that can be used to perform operations supported by the threat analysis feature.
   * 
   * @example
   * 123XXXXXXXX
   */
  subUserId?: number;
  /**
   * @remarks
   * The username of the Alibaba Cloud account that can be used to perform operations supported by the threat analysis feature.
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

