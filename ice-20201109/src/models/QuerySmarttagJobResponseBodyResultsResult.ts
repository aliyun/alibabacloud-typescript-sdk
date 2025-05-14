// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmarttagJobResponseBodyResultsResult extends $dara.Model {
  /**
   * @remarks
   * The details of the analysis result. The value is a JSON string. For more information about the parameters of different result types, see the "Parameters of different result types" section of this topic.
   * 
   * @example
   * {"title":"example-title-****"}
   */
  data?: string;
  /**
   * @remarks
   * The type of the analysis result.
   * 
   * *   The type of the analysis result based on Smart tagging V1.0. Valid values:
   * 
   * 1.  TextLabel: the text tag.
   * 2.  VideoLabel: the video tag.
   * 3.  ASR: the original result of automatic speech recognition (ASR). By default, this type of result is not returned.
   * 4.  OCR: the original result of optical character recognition (OCR). By default, this type of result is not returned.
   * 5.  NLP: the natural language processing (NLP)-based result. By default, this type of result is not returned.
   * 
   * *   The type of the analysis result based on Smart tagging V2.0. Valid values:
   * 
   * 1.  CPVLabel
   * 2.  Meta: the information about the video file, such as the title of the video. By default, this type of information is not returned.
   * 
   * *   The type of the analysis result based on Smart tagging V2.0-custom. Valid values:
   * 
   * 1.  CPVLabel
   * 2.  Meta: the information about the video file, such as the title of the video. By default, this type of information is not returned.
   * 
   * @example
   * Meta
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

