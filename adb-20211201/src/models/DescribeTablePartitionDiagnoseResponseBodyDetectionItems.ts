// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTablePartitionDiagnoseResponseBodyDetectionItems extends $dara.Model {
  /**
   * @remarks
   * The detection result.
   * 
   * @example
   * Multiple oversized non-partitioned tables are detected.
   */
  message?: string;
  /**
   * @remarks
   * The name of the detection item.
   * 
   * @example
   * Improper partition field diagnostics
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
   * WARNING
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

