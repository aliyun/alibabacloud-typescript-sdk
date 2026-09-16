// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiTransformField } from "./AiTransformField";


export class AiChunkTransformParameters extends $dara.Model {
  /**
   * @remarks
   * The chunking algorithm. Valid values: markdown_header and recursive_character.
   * 
   * @example
   * recursive_character
   */
  chunkingType?: string;
  /**
   * @remarks
   * The text field to chunk. This operator does not use InputField.
   */
  inputField?: AiTransformField;
  /**
   * @remarks
   * The chunk overlap length. Default value: 10.
   * 
   * @example
   * 10
   */
  maxOverlapSize?: number;
  /**
   * @remarks
   * The maximum chunk length. Default value: 1000.
   * 
   * @example
   * 1000
   */
  maxSegmentSize?: number;
  /**
   * @remarks
   * The field name in the CloudEvent to which the output is attached. Default value: transform0.
   * 
   * @example
   * chunks
   */
  stepName?: string;
  /**
   * @remarks
   * Specifies whether to split the output into multiple events. Default value: true.
   * 
   * @example
   * true
   */
  unpack?: boolean;
  static names(): { [key: string]: string } {
    return {
      chunkingType: 'ChunkingType',
      inputField: 'InputField',
      maxOverlapSize: 'MaxOverlapSize',
      maxSegmentSize: 'MaxSegmentSize',
      stepName: 'StepName',
      unpack: 'Unpack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkingType: 'string',
      inputField: AiTransformField,
      maxOverlapSize: 'number',
      maxSegmentSize: 'number',
      stepName: 'string',
      unpack: 'boolean',
    };
  }

  validate() {
    if(this.inputField && typeof (this.inputField as any).validate === 'function') {
      (this.inputField as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

