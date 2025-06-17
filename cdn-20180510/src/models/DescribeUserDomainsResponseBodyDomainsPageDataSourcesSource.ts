// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserDomainsResponseBodyDomainsPageDataSourcesSource extends $dara.Model {
  /**
   * @remarks
   * The address of the origin server.
   * 
   * @example
   * ***.oss-cn-hangzhou.aliyuncs.com
   */
  content?: string;
  /**
   * @remarks
   * The port of the origin server.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The priority.
   * 
   * @example
   * 20
   */
  priority?: string;
  /**
   * @remarks
   * The type of the origin server.
   * 
   * @example
   * oss
   */
  type?: string;
  /**
   * @remarks
   * The weight of the origin server if multiple origin servers have been specified.
   * 
   * @example
   * 15
   */
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      port: 'Port',
      priority: 'Priority',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      port: 'number',
      priority: 'string',
      type: 'string',
      weight: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

