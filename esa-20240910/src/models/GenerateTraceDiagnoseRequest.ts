// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateTraceDiagnoseRequest extends $dara.Model {
  /**
   * @remarks
   * The source of the request.
   * 
   * @example
   * ai
   */
  source?: string;
  /**
   * @remarks
   * The URL to diagnose.
   * 
   * This parameter is required.
   * 
   * @example
   * http://www.example.com/xxx.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

