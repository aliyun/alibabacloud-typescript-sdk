// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MedicalAnswerRaDoc extends $dara.Model {
  /**
   * @remarks
   * The content summary of the reference source. Summaries can be returned for medical web pages and drug instructions.
   * 
   * @example
   * Stomach pain can be caused by various factors, including gastrointestinal spasms, inflammation, urinary tract stones, and menstrual pain. It can be relieved by applying a warm compress to the abdomen or treated by taking pain-relieving medication
   */
  content?: string;
  /**
   * @remarks
   * The URL of the reference source. This can be an empty string for sources such as papers, clinical guidelines, and books.
   * 
   * @example
   * https://www.example.com/article/4CD364Mm8hh.html
   */
  rawUrl?: string;
  /**
   * @remarks
   * The title of the reference source.
   * 
   * @example
   * How to quickly and easily relieve stomach pain
   */
  title?: string;
  /**
   * @remarks
   * The type of the reference source, such as medical web pages, medical books, papers, or clinical guidelines.
   * 
   * @example
   * med_web_source
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      rawUrl: 'rawUrl',
      title: 'title',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      rawUrl: 'string',
      title: 'string',
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

