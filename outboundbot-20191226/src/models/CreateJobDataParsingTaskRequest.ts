// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobDataParsingTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * b3865dc3-40fa-4afd-9fe4-dc7cda305a24
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  jobFilePath?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobFilePath: 'JobFilePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobFilePath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

