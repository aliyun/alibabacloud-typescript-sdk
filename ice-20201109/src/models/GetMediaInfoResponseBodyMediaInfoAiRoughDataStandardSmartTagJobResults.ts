// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaInfoResponseBodyMediaInfoAiRoughDataStandardSmartTagJobResults extends $dara.Model {
  /**
   * @remarks
   * The result data. The value is a JSON string. For information about the data structures of different data types<props="china">, see [Description of the Results parameter](https://help.aliyun.com/zh/ims/developer-reference/api-ice-2020-11-09-querysmarttagjob?spm=a2c4g.11186623.0.0.521d48b7KfapOL#api-detail-40).
   * 
   * @example
   * {"autoChapters": [...]}
   */
  data?: string;
  /**
   * @remarks
   * The tagging type. Valid values:
   * 
   * *   NLP: natural language processing (NLP)-based tagging
   * 
   * @example
   * NLP
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

