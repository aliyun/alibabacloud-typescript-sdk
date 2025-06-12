// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomSourceTopicAnalysisTaskResponseBodyDataClusterResultsClusterNews extends $dara.Model {
  title?: string;
  /**
   * @example
   * http://www.example.com/xxx.html
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
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

