// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MedicalKnowledgeInfo extends $dara.Model {
  /**
   * @remarks
   * The structured text composed of the entity name and its properties.
   * 
   * @example
   * Entity: Amoxicillin capsules
   * - Property[Exact active ingredient]: Amoxicillin
   * - Property[Manufactured dosage form]: Oral capsule
   */
  content?: string;
  /**
   * @remarks
   * The source link of the entity property content.
   * 
   * @example
   * https://p.example.cn/0387f345/index?struct_id=VdB%2BLV7w7lHHEp
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

