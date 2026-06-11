// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKnowledgeBaseRequest extends $dara.Model {
  /**
   * @remarks
   * The new knowledge base description.
   * 
   * @example
   * updated kb desc
   */
  description?: string;
  /**
   * @remarks
   * The knowledge base ID.
   * 
   * This parameter is required.
   * 
   * @example
   * kb-HZ-zgr1***
   */
  kbUuid?: string;
  /**
   * @remarks
   * The new knowledge base name.
   * 
   * @example
   * updated kb name
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      kbUuid: 'KbUuid',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      kbUuid: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

