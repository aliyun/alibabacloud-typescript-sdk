// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDrdsSqlAuditStatusResponseBodyDataData extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * Indicates whether the complete report of the SQL audit is supported. Valid values: true and false.
   * 
   * @example
   * true
   */
  detailed?: string;
  /**
   * @remarks
   * Indicates whether the SQL audit feature is enabled for the database. Valid values: true and false.
   * 
   * @example
   * true
   */
  enabled?: string;
  /**
   * @remarks
   * The UID of the external delivery.
   * 
   * > This parameter is returned only if external log delivery is enabled.
   * 
   * @example
   * 111
   */
  extraAliUid?: number;
  /**
   * @remarks
   * The Log Service Logstore from which logs are delivered.
   * 
   * > This parameter is returned only if external log delivery is enabled.
   * 
   * @example
   * test
   */
  extraSlsLogStore?: string;
  /**
   * @remarks
   * The Log Service project from which logs are delivered.
   * 
   * > This parameter is returned only if external log delivery is enabled.
   * 
   * @example
   * test
   */
  extraSlsProject?: string;
  /**
   * @remarks
   * Indicates whether external log delivery is enabled. Valid values: true and false.
   * 
   * @example
   * false
   */
  extraWriteEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      detailed: 'Detailed',
      enabled: 'Enabled',
      extraAliUid: 'ExtraAliUid',
      extraSlsLogStore: 'ExtraSlsLogStore',
      extraSlsProject: 'ExtraSlsProject',
      extraWriteEnabled: 'ExtraWriteEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      detailed: 'string',
      enabled: 'string',
      extraAliUid: 'number',
      extraSlsLogStore: 'string',
      extraSlsProject: 'string',
      extraWriteEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsSqlAuditStatusResponseBodyData extends $dara.Model {
  data?: DescribeDrdsSqlAuditStatusResponseBodyDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeDrdsSqlAuditStatusResponseBodyDataData },
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

export class DescribeDrdsSqlAuditStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data set.
   */
  data?: DescribeDrdsSqlAuditStatusResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DC3ABA3E-0F8A-4596-9104-F5155C******
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the request.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDrdsSqlAuditStatusResponseBodyData,
      requestId: 'string',
      success: 'boolean',
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

