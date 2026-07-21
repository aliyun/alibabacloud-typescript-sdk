// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MetricKVPairDTO extends $dara.Model {
  /**
   * @remarks
   * Metric Name.  
   * 
   * **Chat**  
   * - `total_calls`: Number Of Calls, integer, Count  
   * - `input_tokens`: Total input tokens, integer  
   * - `output_tokens`: Total output tokens, integer  
   * - `reasoning_tokens`: Reasoning tokens, integer  
   * - `cached_tokens`: Cached input tokens (hit), integer  
   * 
   * **Vision**  
   * - `total_calls`: Number Of Calls, integer, Count  
   * - `image_count`: Number of generated images, integer  
   * - `video_duration`: Generated video duration, rounded to 3 decimal places, seconds  
   * 
   * **Embedding**  
   * - `total_calls`: Number Of Calls, integer, Count  
   * - `embedding_output_tokens`: Embedding output tokens, integer  
   * - `billing_tokens`: Total billing tokens, integer  
   * - `image_tokens`: Image tokens (multimodal embedding), integer  
   * 
   * **Omni-modal (ChatFullmodal / ChatMultimodal)**  
   * - `total_calls`: Number Of Calls, integer, Count  
   * - `input_text_tokens`: Input text tokens, integer  
   * - `input_audio_tokens`: Input audio tokens, integer  
   * - `input_image_tokens`: Input image tokens, integer  
   * - `input_video_tokens`: Input video tokens, integer  
   * - `output_text_tokens`: Output text tokens, integer  
   * - `output_audio_tokens`: Output audio tokens, integer  
   * 
   * **Speech (TTS / ASR)**  
   * - `total_calls`: Number Of Calls, integer, Count  
   * - `characters`: Characters converted to speech, integer  
   * - `asr_duration`: Speech recognition duration, rounded to 3 decimal places, seconds
   * 
   * @example
   * total_calls
   */
  key?: string;
  /**
   * @remarks
   * Metric value
   * 
   * @example
   * 100
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

