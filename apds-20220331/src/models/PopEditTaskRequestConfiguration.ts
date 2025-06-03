// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PopEditTaskRequestConfiguration extends $dara.Model {
  dataTypeMappingFile?: any;
  dataTypeOssFileName?: string;
  dataTypeOssObjectName?: string;
  dataTypeRealFileName?: string;
  globalParams?: string;
  tableNameMappingFile?: any;
  tableNameOssFileName?: string;
  tableNameOssObjectName?: string;
  tableNameRealFileName?: string;
  taskId?: number;
  tenantId?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      dataTypeMappingFile: 'dataTypeMappingFile',
      dataTypeOssFileName: 'dataTypeOssFileName',
      dataTypeOssObjectName: 'dataTypeOssObjectName',
      dataTypeRealFileName: 'dataTypeRealFileName',
      globalParams: 'globalParams',
      tableNameMappingFile: 'tableNameMappingFile',
      tableNameOssFileName: 'tableNameOssFileName',
      tableNameOssObjectName: 'tableNameOssObjectName',
      tableNameRealFileName: 'tableNameRealFileName',
      taskId: 'taskId',
      tenantId: 'tenantId',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataTypeMappingFile: 'any',
      dataTypeOssFileName: 'string',
      dataTypeOssObjectName: 'string',
      dataTypeRealFileName: 'string',
      globalParams: 'string',
      tableNameMappingFile: 'any',
      tableNameOssFileName: 'string',
      tableNameOssObjectName: 'string',
      tableNameRealFileName: 'string',
      taskId: 'number',
      tenantId: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

