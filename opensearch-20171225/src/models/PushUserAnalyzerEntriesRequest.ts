// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushUserAnalyzerEntriesRequestEntries extends $dara.Model {
  /**
   * @remarks
   * The operation to be performed on the entries.
   * 
   * Valid values:
   * 
   * *   add
   * *   delete
   * 
   * @example
   * "add"
   */
  cmd?: string;
  /**
   * @remarks
   * The key to be used to query entries.
   * 
   * @example
   * "testvalue"
   */
  key?: string;
  /**
   * @remarks
   * Specifies whether to further analyze the terms that are generated after the search query is analyzed.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  splitEnabled?: boolean;
  /**
   * @remarks
   * The analysis result.
   * 
   * @example
   * "test value"
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      cmd: 'cmd',
      key: 'key',
      splitEnabled: 'splitEnabled',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmd: 'string',
      key: 'string',
      splitEnabled: 'boolean',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushUserAnalyzerEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * The entries of the custom analyzer.
   */
  entries?: PushUserAnalyzerEntriesRequestEntries[];
  /**
   * @remarks
   * Specifies whether to perform a dry run. This parameter is only used to check whether the data source is valid. Valid values: true and false.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      entries: 'entries',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entries: { 'type': 'array', 'itemType': PushUserAnalyzerEntriesRequestEntries },
      dryRun: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.entries)) {
      $dara.Model.validateArray(this.entries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

