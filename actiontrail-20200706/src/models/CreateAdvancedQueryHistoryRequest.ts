// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAdvancedQueryHistoryRequest extends $dara.Model {
  dryRun?: boolean;
  /**
   * @remarks
   * The conditional statement.
   * 
   * You can edit the conditional statement based on the [SQL syntax for advanced event queries](https://help.aliyun.com/document_detail/2557373.html).
   * 
   * @example
   * event.userIdentity.accessKeyId: *
   */
  querySql?: string;
  /**
   * @remarks
   * Specifies whether to enable the simple query mode.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  simpleQuery?: boolean;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      querySql: 'QuerySql',
      simpleQuery: 'SimpleQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      querySql: 'string',
      simpleQuery: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

