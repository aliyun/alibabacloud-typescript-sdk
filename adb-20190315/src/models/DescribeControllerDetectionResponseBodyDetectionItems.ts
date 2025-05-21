// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeControllerDetectionResponseBodyDetectionItems extends $dara.Model {
  /**
   * @remarks
   * The information about the detection result.
   * 
   * @example
   * A CPU increase is detected on the access node.
   */
  message?: string;
  /**
   * @remarks
   * The name of the detection item.
   * 
   * @example
   * CPU increase detection
   */
  name?: string;
  /**
   * @remarks
   * The severity level of the detection result. Valid values:
   * 
   * *   NORMAL
   * *   WARNING
   * *   CRITICAL
   * 
   * @example
   * NORMAL
   * WARNING
   * CRITICAL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      name: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

