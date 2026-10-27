// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVocabularyRequest extends $dara.Model {
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
  words?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      name: 'string',
      words: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.words) {
      $dara.Model.validateMap(this.words);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

