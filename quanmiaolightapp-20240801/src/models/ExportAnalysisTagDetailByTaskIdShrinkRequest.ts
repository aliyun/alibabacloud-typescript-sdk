// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportAnalysisTagDetailByTaskIdShrinkRequest extends $dara.Model {
  categoriesShrink?: string;
  category?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a3d1c2ac-f086-4a21-9069-f5631542f5a2
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      categoriesShrink: 'categories',
      category: 'category',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoriesShrink: 'string',
      category: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

