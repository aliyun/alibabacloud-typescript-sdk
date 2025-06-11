// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesMigrationInfoCheckResult extends $dara.Model {
  code?: string;
  codeName?: string;
  level?: string;
  module?: string;
  moduleName?: string;
  subModule?: string;
  subModuleName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      codeName: 'CodeName',
      level: 'Level',
      module: 'Module',
      moduleName: 'ModuleName',
      subModule: 'SubModule',
      subModuleName: 'SubModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      codeName: 'string',
      level: 'string',
      module: 'string',
      moduleName: 'string',
      subModule: 'string',
      subModuleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

