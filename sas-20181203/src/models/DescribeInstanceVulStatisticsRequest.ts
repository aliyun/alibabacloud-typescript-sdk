// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceVulStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The vulnerability type of the serverless instance. Valid values:
   * 
   * *   **sca**: middleware vulnerabilities
   * *   **app**: application vulnerabilities detected by using a scanner
   * 
   * >  Serverless instances allow you to detect only application vulnerabilities by using a scanner.
   * 
   * @example
   * sca,app
   */
  types?: string;
  /**
   * @remarks
   * The UUID of the instance to query.
   * 
   * >  You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to query the UUID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 5b268326-273e-44fc-a0e3-9482435c****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      types: 'Types',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      types: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

