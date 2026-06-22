// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceVulStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The vulnerability type of the Serverless asset. Valid values:
   * 
   * - **sca**: middleware vulnerability
   * 
   * - **app**: scanner vulnerability
   * 
   * >Serverless assets currently support only application vulnerability scanning.
   * 
   * @example
   * sca,app
   */
  types?: string;
  /**
   * @remarks
   * The UUID of the asset instance to query.
   * >You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to obtain this parameter.
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

