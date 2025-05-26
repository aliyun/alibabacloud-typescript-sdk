// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Statement extends $dara.Model {
  /**
   * @example
   * 1111111
   */
  aliyunUid?: number;
  /**
   * @example
   * SELECT * FROM table
   */
  code?: string;
  /**
   * @example
   * Waiting
   */
  codeState?: string;
  /**
   * @example
   * SQL
   */
  codeType?: string;
  /**
   * @example
   * 1658987911000
   */
  endTime?: number;
  /**
   * @example
   * Disk is full
   */
  error?: string;
  /**
   * @example
   * true
   */
  haveRows?: boolean;
  /**
   * @example
   * Spark is running, the ouput is...
   */
  output?: string;
  /**
   * @example
   * rg1
   */
  resourceGroup?: string;
  /**
   * @example
   * 10
   */
  sessionId?: number;
  /**
   * @example
   * 1658977911000
   */
  startTime?: number;
  /**
   * @example
   * 100
   */
  statementId?: number;
  /**
   * @example
   * 1000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      code: 'Code',
      codeState: 'CodeState',
      codeType: 'CodeType',
      endTime: 'EndTime',
      error: 'Error',
      haveRows: 'HaveRows',
      output: 'Output',
      resourceGroup: 'ResourceGroup',
      sessionId: 'SessionId',
      startTime: 'StartTime',
      statementId: 'StatementId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'number',
      code: 'string',
      codeState: 'string',
      codeType: 'string',
      endTime: 'number',
      error: 'string',
      haveRows: 'boolean',
      output: 'string',
      resourceGroup: 'string',
      sessionId: 'number',
      startTime: 'number',
      statementId: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

