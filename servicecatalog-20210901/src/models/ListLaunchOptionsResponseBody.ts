// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLaunchOptionsResponseBodyLaunchOptionSummariesConstraintSummaries extends $dara.Model {
  /**
   * @remarks
   * The type of the constraint. Valid values:
   * 
   * 1.  Launch
   * 2.  Template
   * 3.  Approval
   * 4.  StackRegion
   * 
   * @example
   * Launch
   */
  constraintType?: string;
  /**
   * @remarks
   * The description of the constraint.
   * 
   * @example
   * Launch as local role TestRole
   */
  description?: string;
  /**
   * @remarks
   * The types of operations that require approval. If the type of the constraint is Approval, this parameter is not empty.
   */
  operationTypes?: string[];
  /**
   * @remarks
   * The regions in which users can launch the service. If the type of the constraint is StackRegion, this parameter is not empty.
   */
  stackRegions?: string[];
  static names(): { [key: string]: string } {
    return {
      constraintType: 'ConstraintType',
      description: 'Description',
      operationTypes: 'OperationTypes',
      stackRegions: 'StackRegions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraintType: 'string',
      description: 'string',
      operationTypes: { 'type': 'array', 'itemType': 'string' },
      stackRegions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.operationTypes)) {
      $dara.Model.validateArray(this.operationTypes);
    }
    if(Array.isArray(this.stackRegions)) {
      $dara.Model.validateArray(this.stackRegions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLaunchOptionsResponseBodyLaunchOptionSummaries extends $dara.Model {
  /**
   * @remarks
   * The constraints.
   */
  constraintSummaries?: ListLaunchOptionsResponseBodyLaunchOptionSummariesConstraintSummaries[];
  /**
   * @remarks
   * The ID of the product portfolio.
   * 
   * @example
   * port-bp1yt7582g****
   */
  portfolioId?: string;
  /**
   * @remarks
   * The name of the product portfolio.
   * 
   * @example
   * DEMO-IT services
   */
  portfolioName?: string;
  static names(): { [key: string]: string } {
    return {
      constraintSummaries: 'ConstraintSummaries',
      portfolioId: 'PortfolioId',
      portfolioName: 'PortfolioName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraintSummaries: { 'type': 'array', 'itemType': ListLaunchOptionsResponseBodyLaunchOptionSummariesConstraintSummaries },
      portfolioId: 'string',
      portfolioName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.constraintSummaries)) {
      $dara.Model.validateArray(this.constraintSummaries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLaunchOptionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The launch options.
   */
  launchOptionSummaries?: ListLaunchOptionsResponseBodyLaunchOptionSummaries[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0FEEF92D-4052-5202-87D0-3D8EC16F81BF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      launchOptionSummaries: 'LaunchOptionSummaries',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      launchOptionSummaries: { 'type': 'array', 'itemType': ListLaunchOptionsResponseBodyLaunchOptionSummaries },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.launchOptionSummaries)) {
      $dara.Model.validateArray(this.launchOptionSummaries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

