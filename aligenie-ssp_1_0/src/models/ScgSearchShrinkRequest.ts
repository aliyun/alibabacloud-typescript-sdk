// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScgSearchShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  scgFilterShrink?: string;
  /**
   * @remarks
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

