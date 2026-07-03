// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUserSourceLogConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The detailed information about the SLS log.
   * 
   * @example
   * cn-shanghai.siem-project.siem-logstore
   */
  diplayLine?: string;
  /**
   * @remarks
   * Indicates whether the details of the log collection task are returned. Valid values:
   * 
   * @example
   * 0
   */
  displayed?: boolean;
  /**
   * @remarks
   * Indicates whether the log is collected. Valid values:
   * 
   * @example
   * 0
   */
  imported?: boolean;
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
   * The code of the log.
   * 
   * @example
   * cloud_siem_aegis_proc
   */
  sourceLogCode?: string;
  /**
   * @remarks
   * The code of the product.
   * 
   * @example
   * sas
   */
  sourceProdCode?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account for which the logs are collected.
   * 
   * @example
   * 123XXXXXXXX
   */
  subUserId?: number;
  /**
   * @remarks
   * The name of the Alibaba Cloud account for which the logs are collected.
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
   * The return value of the request.
   */
  data?: AddUserSourceLogConfigResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
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

