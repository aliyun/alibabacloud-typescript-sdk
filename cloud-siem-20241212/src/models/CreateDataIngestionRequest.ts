// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataIngestionRequest extends $dara.Model {
  capacityCount?: number;
  dataIngestionMode?: string;
  dataIngestionStateCode?: string;
  dataIngestionType?: string;
  dataSourceEditable?: boolean;
  dataSourceId?: string;
  lang?: string;
  normalizationRuleEditable?: boolean;
  normalizationRuleId?: string;
  productId?: string;
  regionId?: string;
  roleFor?: number;
  scanDataSourceId?: string;
  streamJobId?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      capacityCount: 'CapacityCount',
      dataIngestionMode: 'DataIngestionMode',
      dataIngestionStateCode: 'DataIngestionStateCode',
      dataIngestionType: 'DataIngestionType',
      dataSourceEditable: 'DataSourceEditable',
      dataSourceId: 'DataSourceId',
      lang: 'Lang',
      normalizationRuleEditable: 'NormalizationRuleEditable',
      normalizationRuleId: 'NormalizationRuleId',
      productId: 'ProductId',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      scanDataSourceId: 'ScanDataSourceId',
      streamJobId: 'StreamJobId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityCount: 'number',
      dataIngestionMode: 'string',
      dataIngestionStateCode: 'string',
      dataIngestionType: 'string',
      dataSourceEditable: 'boolean',
      dataSourceId: 'string',
      lang: 'string',
      normalizationRuleEditable: 'boolean',
      normalizationRuleId: 'string',
      productId: 'string',
      regionId: 'string',
      roleFor: 'number',
      scanDataSourceId: 'string',
      streamJobId: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

