// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVocabularyShrinkRequest extends $dara.Model {
  description?: string;
  /**
   * @example
   * e48e45dd-e47a-4744-a063-f08cbebb1c5a
   */
  instanceId?: string;
  name?: string;
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

