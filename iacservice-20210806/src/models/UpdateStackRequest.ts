// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStackRequest extends $dara.Model {
  /**
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @example
   * description
   */
  description?: string;
  /**
   * @example
   * stack-test
   */
  name?: string;
  /**
   * @example
   * TestIacRole
   */
  ramRole?: string;
  /**
   * @example
   * oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/code.zip
   */
  sourcePath?: string;
  /**
   * @example
   * /
   */
  workingDirectory?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      description: 'description',
      name: 'name',
      ramRole: 'ramRole',
      sourcePath: 'sourcePath',
      workingDirectory: 'workingDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      name: 'string',
      ramRole: 'string',
      sourcePath: 'string',
      workingDirectory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

