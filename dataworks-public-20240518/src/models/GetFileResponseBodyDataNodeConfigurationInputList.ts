// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileResponseBodyDataNodeConfigurationInputList extends $dara.Model {
  /**
   * @remarks
   * The output name of the parent file on which the current file depends.
   * 
   * This parameter corresponds to the Output Name of Ancestor Node parameter under Parent Nodes after Same Cycle is selected in the Dependencies section of the Properties tab on the DataStudio page in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * project.001_out
   */
  input?: string;
  /**
   * @remarks
   * The mode of the configuration file dependency. Valid values:
   * 
   * *   MANUAL: Scheduling dependencies are manually configured.
   * *   AUTO: Scheduling dependencies are automatically parsed.
   * 
   * @example
   * MANUAL
   */
  parseType?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      parseType: 'ParseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: 'string',
      parseType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

