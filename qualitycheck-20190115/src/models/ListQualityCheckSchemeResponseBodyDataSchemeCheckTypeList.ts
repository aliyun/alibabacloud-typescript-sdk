// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQualityCheckSchemeResponseBodyDataSchemeCheckTypeList extends $dara.Model {
  checkName?: string;
  /**
   * @example
   * 1
   */
  checkType?: number;
  /**
   * @example
   * 1
   */
  enable?: number;
  /**
   * @example
   * 20
   */
  score?: number;
  /**
   * @example
   * 10
   */
  targetType?: number;
  static names(): { [key: string]: string } {
    return {
      checkName: 'CheckName',
      checkType: 'CheckType',
      enable: 'Enable',
      score: 'Score',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkName: 'string',
      checkType: 'number',
      enable: 'number',
      score: 'number',
      targetType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

