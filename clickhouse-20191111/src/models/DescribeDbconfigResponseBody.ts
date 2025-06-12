// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration information about the cluster.
   * 
   * @example
   * <dictionaries><dictionary><name>test</name><source><clickhouse><host>10.37.XX.XX</host><port>9000</port><user>default</user><password></password><db>default</db><table>t_organization</table><where>id=1</where><invalidate_query>SQL_QUERY</invalidate_query></clickhouse></source><lifetime><min>31</min><max>33</max></lifetime><layout><flat></flat></layout><structure><key><attribute><name>field1</name><type>String</type></attribute></key></structure></dictionary></dictionaries>
   */
  config?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16060117-92E1-5F3B-BF42-28B172D0F869
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

