// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AICoachScriptHotWordItem extends $dara.Model {
  /**
   * @example
   * 849843
   */
  creatorId?: string;
  /**
   * @example
   * username
   */
  creatorName?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * 2026-11-13 12:01:12
   */
  gmtCreate?: string;
  /**
   * @example
   * 2026-11-13 12:01:12
   */
  gmtModified?: string;
  /**
   * @example
   * test
   */
  hotWord?: string;
  /**
   * @example
   * 34532
   */
  hotWordId?: string;
  /**
   * @example
   * 892340
   */
  modifierId?: string;
  /**
   * @example
   * username
   */
  modifierName?: string;
  /**
   * @example
   * 8491340
   */
  scriptRecordId?: string;
  static names(): { [key: string]: string } {
    return {
      creatorId: 'creatorId',
      creatorName: 'creatorName',
      description: 'description',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      hotWord: 'hotWord',
      hotWordId: 'hotWordId',
      modifierId: 'modifierId',
      modifierName: 'modifierName',
      scriptRecordId: 'scriptRecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorId: 'string',
      creatorName: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      hotWord: 'string',
      hotWordId: 'string',
      modifierId: 'string',
      modifierName: 'string',
      scriptRecordId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

