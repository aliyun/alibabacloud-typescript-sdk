// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceRiskLevelsResponseBodyInstanceRisksDetails extends $dara.Model {
  /**
   * @remarks
   * The IP addresses of servers.
   * 
   * @example
   * 203.107.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The risk levels. Valid values:
   * 
   * *   **medium**
   * 
   * @example
   * medium
   */
  level?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * ResourceNotProtected
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      level: 'Level',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      level: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

