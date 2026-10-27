// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVocabularyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Contains financial industry terminology
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * e48e45dd-e47a-4744-a063-f08cbebb1c5a
   */
  instanceId?: string;
  /**
   * @remarks
   * The hotword name.
   * 
   * @example
   * Financial industry hotwords
   */
  name?: string;
  /**
   * @remarks
   * The list of hotwords.
   */
  wordsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      wordsShrink: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      name: 'string',
      wordsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

