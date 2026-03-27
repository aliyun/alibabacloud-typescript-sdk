// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchTableKnowledgeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1***
   */
  dbId?: string;
  /**
   * @example
   * qwen-plus
   */
  model?: string;
  /**
   * @example
   * 查看当前的灰度情况
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      model: 'Model',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'string',
      model: 'string',
      query: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

