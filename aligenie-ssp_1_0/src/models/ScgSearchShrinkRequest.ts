// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScgSearchShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Query filter
   * 
   * This parameter is required.
   */
  scgFilterShrink?: string;
  /**
   * @remarks
   * Selection pool ID. Optional values: MC201132 (Ethnic Chinese Style), MC201136 (Pop Music), MC201139 (Sweet Love), MC201133 (Folk), MC201137 (Relaxing Reading), MC201138 (Happiness), PA202029 (Stories), PA202030 (Children\\"s Songs), PA202028 (Chinese Classics and History), PA202032 (Encyclopedia), PA202031 (English Children\\"s Songs)
   * 
   * This parameter is required.
   * 
   * @example
   * MC201132
   */
  topicId?: string;
  static names(): { [key: string]: string } {
    return {
      scgFilterShrink: 'ScgFilter',
      topicId: 'TopicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scgFilterShrink: 'string',
      topicId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

