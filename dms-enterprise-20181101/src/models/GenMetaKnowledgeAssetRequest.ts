// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenMetaKnowledgeAssetRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dbId?: number;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

