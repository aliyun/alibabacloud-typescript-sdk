// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAutoResourceOptimizeRulesAsyncRequest extends $dara.Model {
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  consoleContext?: string;
  /**
   * @remarks
   * The database instance IDs.
   * 
   * >  Set this parameter to a JSON array that consists of multiple instance IDs. Separate instance IDs with commas (,). Example: `[\\"Instance ID1\\", \\"Instance ID2\\"]`.
   * 
   * This parameter is required.
   * 
   * @example
   * [\\"rm-2ze8g2am97624****\\",\\"rm-2ze9xrhze0709****\\"]
   */
  instanceIds?: string;
  /**
   * @remarks
   * The ID of the asynchronous request.
   * 
   * >  Asynchronous calls do not immediately return the complete results. To obtain the complete results, you must use the value of **ResultId** returned in the response to re-initiate the call until the value of **isFinish** is **true**.**** In this case, you must call this operation at least twice.
   * 
   * @example
   * async__507044db6c4eadfa2dab9b084e80****
   */
  resultId?: string;
  /**
   * @remarks
   * The fragmentation rate that triggers automatic fragment recycling of a single physical table. Valid values: **0.10** to **0.99**.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  tableFragmentationRatio?: number;
  /**
   * @remarks
   * The minimum storage usage that triggers automatic fragment recycling of a single physical table. Valid values: **5** to **100**. Unit: GB.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  tableSpaceSize?: number;
  static names(): { [key: string]: string } {
    return {
      consoleContext: 'ConsoleContext',
      instanceIds: 'InstanceIds',
      resultId: 'ResultId',
      tableFragmentationRatio: 'TableFragmentationRatio',
      tableSpaceSize: 'TableSpaceSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleContext: 'string',
      instanceIds: 'string',
      resultId: 'string',
      tableFragmentationRatio: 'number',
      tableSpaceSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

