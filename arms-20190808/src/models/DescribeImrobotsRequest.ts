// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIMRobotsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The chatbot IDs.
   * 
   * @example
   * 123
   */
  robotIds?: string;
  /**
   * @remarks
   * The name of the IM chatbot.
   * 
   * @example
   * Chatbot name
   */
  robotName?: string;
  /**
   * @remarks
   * The number of IM chatbots to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      robotIds: 'RobotIds',
      robotName: 'RobotName',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      robotIds: 'string',
      robotName: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

