// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateSqlFromNLResponseBodyDataKnowledgeReferences extends $dara.Model {
  /**
   * @example
   * {\\"Status\\": \\"OK\\"}
   */
  content?: string;
  /**
   * @example
   * verified
   */
  level?: string;
  /**
   * @example
   * sample_tbl
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      level: 'Level',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      level: 'string',
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

