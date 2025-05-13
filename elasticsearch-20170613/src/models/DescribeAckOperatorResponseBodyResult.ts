// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAckOperatorResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The installation status of ES-operator. Valid values:
   * 
   * *   deployed: ES-operator is installed.
   * *   not-deploy: ES-operator is not installed.
   * *   failed: ES-operator fails to be installed.
   * *   unknown: The installation status of ES-operator is unknown.
   * 
   * @example
   * deployed
   */
  status?: string;
  /**
   * @remarks
   * The version of ES-operator.
   * 
   * @example
   * 1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

