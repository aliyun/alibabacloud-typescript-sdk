// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileResponseBodyDataNodeConfigurationOutputList extends $dara.Model {
  /**
   * @remarks
   * The output name of the current file.
   * 
   * This parameter corresponds to the Output Name parameter under Output after Same Cycle is selected in the Dependencies section of the Properties tab on the DataStudio page in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * dw_project.002_out
   */
  output?: string;
  /**
   * @remarks
   * The output table name of the current file.
   * 
   * This parameter corresponds to the Output Table Name parameter under Output after Same Cycle is selected in the Dependencies section of the Properties tab on the DataStudio page in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * ods_user_info_d
   */
  refTableName?: string;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      refTableName: 'RefTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
      refTableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

