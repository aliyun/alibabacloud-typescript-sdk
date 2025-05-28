// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteConsumerGroupSubscriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The filter expression.
   * 
   * This parameter is required.
   * 
   * @example
   * *
   */
  filterExpression?: string;
  /**
   * @remarks
   * The type of the filter expression. Valid values:
   * 
   * *   SQL: filters messages by using SQL expressions.
   * *   TAG: filters messages by using tags.
   * 
   * This parameter is required.
   * 
   * @example
   * TAG
   */
  filterType?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * This parameter is required.
   * 
   * @example
   * topic_test
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      filterExpression: 'filterExpression',
      filterType: 'filterType',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterExpression: 'string',
      filterType: 'string',
      topicName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

