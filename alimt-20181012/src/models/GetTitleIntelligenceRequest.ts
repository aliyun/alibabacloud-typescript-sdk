// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTitleIntelligenceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 111
   */
  catLevelThreeId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 222
   */
  catLevelTwoId?: number;
  /**
   * @example
   * {"product_id":"1212"}
   */
  extra?: string;
  /**
   * @example
   * hello,apple
   */
  keywords?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ae
   */
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      catLevelThreeId: 'CatLevelThreeId',
      catLevelTwoId: 'CatLevelTwoId',
      extra: 'Extra',
      keywords: 'Keywords',
      platform: 'Platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catLevelThreeId: 'number',
      catLevelTwoId: 'number',
      extra: 'string',
      keywords: 'string',
      platform: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

