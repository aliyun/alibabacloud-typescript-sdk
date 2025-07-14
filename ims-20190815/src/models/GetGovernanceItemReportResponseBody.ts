// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGovernanceItemReportResponseBodyColumnsSchemaColumnSchema extends $dara.Model {
  /**
   * @example
   * UserPrincipalName
   */
  columnName?: string;
  /**
   * @example
   * String
   */
  columnType?: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      columnType: 'ColumnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      columnType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGovernanceItemReportResponseBodyColumnsSchema extends $dara.Model {
  columnSchema?: GetGovernanceItemReportResponseBodyColumnsSchemaColumnSchema[];
  static names(): { [key: string]: string } {
    return {
      columnSchema: 'ColumnSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnSchema: { 'type': 'array', 'itemType': GetGovernanceItemReportResponseBodyColumnsSchemaColumnSchema },
    };
  }

  validate() {
    if(Array.isArray(this.columnSchema)) {
      $dara.Model.validateArray(this.columnSchema);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGovernanceItemReportResponseBodyColumnsValueColumnRow extends $dara.Model {
  columnValue?: any[];
  static names(): { [key: string]: string } {
    return {
      columnValue: 'ColumnValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnValue: { 'type': 'array', 'itemType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.columnValue)) {
      $dara.Model.validateArray(this.columnValue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGovernanceItemReportResponseBodyColumnsValue extends $dara.Model {
  columnRow?: GetGovernanceItemReportResponseBodyColumnsValueColumnRow[];
  static names(): { [key: string]: string } {
    return {
      columnRow: 'ColumnRow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnRow: { 'type': 'array', 'itemType': GetGovernanceItemReportResponseBodyColumnsValueColumnRow },
    };
  }

  validate() {
    if(Array.isArray(this.columnRow)) {
      $dara.Model.validateArray(this.columnRow);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGovernanceItemReportResponseBody extends $dara.Model {
  columnsSchema?: GetGovernanceItemReportResponseBodyColumnsSchema;
  columnsValue?: GetGovernanceItemReportResponseBodyColumnsValue;
  /**
   * @example
   * 2020-10-19T15:06:52Z
   */
  generateTime?: string;
  /**
   * @example
   * true
   */
  isTruncated?: boolean;
  /**
   * @example
   * EXAMPLE
   */
  marker?: string;
  /**
   * @example
   * Number
   */
  metricType?: string;
  /**
   * @example
   * 100
   */
  metricValue?: any;
  /**
   * @example
   * F2CE9688-AA85-5F23-8C22-0EC23473405F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      columnsSchema: 'ColumnsSchema',
      columnsValue: 'ColumnsValue',
      generateTime: 'GenerateTime',
      isTruncated: 'IsTruncated',
      marker: 'Marker',
      metricType: 'MetricType',
      metricValue: 'MetricValue',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnsSchema: GetGovernanceItemReportResponseBodyColumnsSchema,
      columnsValue: GetGovernanceItemReportResponseBodyColumnsValue,
      generateTime: 'string',
      isTruncated: 'boolean',
      marker: 'string',
      metricType: 'string',
      metricValue: 'any',
      requestId: 'string',
    };
  }

  validate() {
    if(this.columnsSchema && typeof (this.columnsSchema as any).validate === 'function') {
      (this.columnsSchema as any).validate();
    }
    if(this.columnsValue && typeof (this.columnsValue as any).validate === 'function') {
      (this.columnsValue as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

