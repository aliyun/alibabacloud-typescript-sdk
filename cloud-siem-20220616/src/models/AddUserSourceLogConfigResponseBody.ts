// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUserSourceLogConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The display details of the Logstore.
   * 
   * @example
   * cn-shanghai.siem-project.siem-logstore
   */
  diplayLine?: string;
  /**
   * @remarks
   * Indicates whether the details of added logs are returned. Valid values: true false
   * 
   * @example
   * 0
   */
  displayed?: boolean;
  /**
   * @remarks
   * Indicates whether the logs are added to the threat analysis feature. Valid values: true false
   * 
   * @example
   * 0
   */
  imported?: boolean;
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
   * The log code.
   * 
   * @example
   * cloud_siem_aegis_proc
   */
  sourceLogCode?: string;
  /**
   * @remarks
   * The code of the cloud service.
   * 
   * @example
   * sas
   */
  sourceProdCode?: string;
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
   * sas_account_xxx
   */
  subUserName?: string;
  static names(): { [key: string]: string } {
    return {
      diplayLine: 'DiplayLine',
      displayed: 'Displayed',
      imported: 'Imported',
      mainUserId: 'MainUserId',
      sourceLogCode: 'SourceLogCode',
      sourceProdCode: 'SourceProdCode',
      subUserId: 'SubUserId',
      subUserName: 'SubUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diplayLine: 'string',
      displayed: 'boolean',
      imported: 'boolean',
      mainUserId: 'number',
      sourceLogCode: 'string',
      sourceProdCode: 'string',
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

export class AddUserSourceLogConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: AddUserSourceLogConfigResponseBodyData;
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
      data: AddUserSourceLogConfigResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

