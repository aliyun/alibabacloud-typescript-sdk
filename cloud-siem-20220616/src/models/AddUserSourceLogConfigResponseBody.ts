// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUserSourceLogConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The detailed Simple Log Service (SLS) information for log ingestion.
   * 
   * @example
   * cn-shanghai.siem-project.siem-logstore
   */
  diplayLine?: string;
  /**
   * @remarks
   * Indicates whether the ingestion details are returned. Valid values:
   * - true: The ingestion details are returned.
   * - false: The ingestion details are not returned.
   * 
   * @example
   * true
   */
  displayed?: boolean;
  /**
   * @remarks
   * Indicates whether the logs are ingested. Valid values:
   * - true: The logs are ingested.
   * - false: The logs are not ingested.
   * 
   * @example
   * true
   */
  imported?: boolean;
  /**
   * @remarks
   * The Alibaba Cloud account ID that purchased Threat Analysis.
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
   * The product code.
   * 
   * @example
   * sas
   */
  sourceProdCode?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID for Threat Analysis.
   * 
   * @example
   * 123XXXXXXXX
   */
  subUserId?: number;
  /**
   * @remarks
   * The name of the Alibaba Cloud account for Threat Analysis.
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
   * The response data.
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

