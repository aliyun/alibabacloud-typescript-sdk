// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCfwRiskLevelSummaryResponseBodyRiskList extends $dara.Model {
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
   * The number of at-risk Elastic Compute Service (ECS) instances.
   * 
   * @example
   * 50
   */
  num?: string;
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
      level: 'Level',
      num: 'Num',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      num: 'string',
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

