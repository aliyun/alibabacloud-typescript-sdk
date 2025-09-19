// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataSourceResponseBodyMetaDatasMetaDataFieldsOperatorList extends $dara.Model {
  /**
   * @remarks
   * The description of the operator.
   * 
   * @example
   * dingtalk_vul
   */
  description?: string;
  /**
   * @remarks
   * The name of the operator.
   * 
   * @example
   * regex
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSourceResponseBodyMetaDatasMetaDataFields extends $dara.Model {
  /**
   * @remarks
   * The key of the field.
   * 
   * @example
   * type
   */
  filed?: string;
  /**
   * @remarks
   * The name of the field.
   * 
   * @example
   * dingtalk_vul_type
   */
  filedName?: string;
  /**
   * @remarks
   * The operators.
   */
  operatorList?: DescribeDataSourceResponseBodyMetaDatasMetaDataFieldsOperatorList[];
  /**
   * @remarks
   * The sample field.
   * 
   * @example
   * all:dingtalk_all;cms:dingtalk_vul_cms;oval:dingtalk_vul_cve;sys:dingtalk_vul_sys;emg:dingtalk_vul_emg
   */
  sample?: string;
  /**
   * @remarks
   * The value type of the field.
   * 
   * @example
   * string
   */
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      filed: 'Filed',
      filedName: 'FiledName',
      operatorList: 'OperatorList',
      sample: 'Sample',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filed: 'string',
      filedName: 'string',
      operatorList: { 'type': 'array', 'itemType': DescribeDataSourceResponseBodyMetaDatasMetaDataFieldsOperatorList },
      sample: 'string',
      valueType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.operatorList)) {
      $dara.Model.validateArray(this.operatorList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSourceResponseBodyMetaDatas extends $dara.Model {
  /**
   * @remarks
   * The ID of the data source.
   * 
   * @example
   * 1753
   */
  dataSourceId?: number;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * sas_analysis_pre-sas-operation-log-sas-event-suspicious
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The description of the data source.
   * 
   * @example
   * dingtalk_suspicious
   */
  description?: string;
  /**
   * @remarks
   * The metadata files.
   */
  metaDataFields?: DescribeDataSourceResponseBodyMetaDatasMetaDataFields[];
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      dataSourceName: 'DataSourceName',
      description: 'Description',
      metaDataFields: 'MetaDataFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'number',
      dataSourceName: 'string',
      description: 'string',
      metaDataFields: { 'type': 'array', 'itemType': DescribeDataSourceResponseBodyMetaDatasMetaDataFields },
    };
  }

  validate() {
    if(Array.isArray(this.metaDataFields)) {
      $dara.Model.validateArray(this.metaDataFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The metadata of the data sources.
   */
  metaDatas?: DescribeDataSourceResponseBodyMetaDatas[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 7532B7EE-7CE7-5F4D-BF04-B12447DDXXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metaDatas: 'MetaDatas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metaDatas: { 'type': 'array', 'itemType': DescribeDataSourceResponseBodyMetaDatas },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.metaDatas)) {
      $dara.Model.validateArray(this.metaDatas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

