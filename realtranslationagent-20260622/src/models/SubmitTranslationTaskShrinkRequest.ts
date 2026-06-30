// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTranslationTaskShrinkRequest extends $dara.Model {
  APIKey?: string;
  baseTaskId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  configShrink?: string;
  customTermsShrink?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      APIKey: 'APIKey',
      baseTaskId: 'BaseTaskId',
      configShrink: 'Config',
      customTermsShrink: 'CustomTerms',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APIKey: 'string',
      baseTaskId: 'string',
      configShrink: 'string',
      customTermsShrink: 'string',
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

