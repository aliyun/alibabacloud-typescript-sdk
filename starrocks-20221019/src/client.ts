// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("starrocks", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Modifies the number of CUs for a warehouse of an E-MapReduce (EMR) Serverless StarRocks instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of EMR Serverless StarRocks instances.
   * Before you call this operation, take note of the following items:
   * *   You can modify the number of CUs for a warehouse of only StarRocks instances of Standard Edition.
   * *   You can increase the number of disks only for warehouses of the standard specifications.
   * *   The instance must be in the Running state.
   * After you modify the number of CUs for a warehouse, the billing of CUs has the following changes:
   * *   Pay-as-you-go StarRocks instances: You are charged based on the number of CUs.
   * *   Subscription StarRocks instances: You are charged additionally based on the price difference between the number of CUs before and after the change and the remaining days of the billing cycle. The billing cycle starts from 00:00 the next day until the end of the subscription period.
   * 
   * @param request - ModifyCuRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCuResponse
   */
  async modifyCuWithOptions(request: $_model.ModifyCuRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCuResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fastMode)) {
      query["FastMode"] = request.fastMode;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.promotionOptionNo)) {
      query["PromotionOptionNo"] = request.promotionOptionNo;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCu",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/resourceChange/modifyCu`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCuResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCuResponse({}));
  }

  /**
   * Modifies the number of CUs for a warehouse of an E-MapReduce (EMR) Serverless StarRocks instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of EMR Serverless StarRocks instances.
   * Before you call this operation, take note of the following items:
   * *   You can modify the number of CUs for a warehouse of only StarRocks instances of Standard Edition.
   * *   You can increase the number of disks only for warehouses of the standard specifications.
   * *   The instance must be in the Running state.
   * After you modify the number of CUs for a warehouse, the billing of CUs has the following changes:
   * *   Pay-as-you-go StarRocks instances: You are charged based on the number of CUs.
   * *   Subscription StarRocks instances: You are charged additionally based on the price difference between the number of CUs before and after the change and the remaining days of the billing cycle. The billing cycle starts from 00:00 the next day until the end of the subscription period.
   * 
   * @param request - ModifyCuRequest
   * @returns ModifyCuResponse
   */
  async modifyCu(request: $_model.ModifyCuRequest): Promise<$_model.ModifyCuResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyCuWithOptions(request, headers, runtime);
  }

  /**
   * Performs a precheck before you modify the number of CUs for a warehouse.
   * 
   * @param request - ModifyCuPreCheckRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCuPreCheckResponse
   */
  async modifyCuPreCheckWithOptions(request: $_model.ModifyCuPreCheckRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCuPreCheckResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCuPreCheck",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/resourceChange/modifyCuPreCheck`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCuPreCheckResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCuPreCheckResponse({}));
  }

  /**
   * Performs a precheck before you modify the number of CUs for a warehouse.
   * 
   * @param request - ModifyCuPreCheckRequest
   * @returns ModifyCuPreCheckResponse
   */
  async modifyCuPreCheck(request: $_model.ModifyCuPreCheckRequest): Promise<$_model.ModifyCuPreCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyCuPreCheckWithOptions(request, headers, runtime);
  }

  /**
   * Increases the number of disks for a warehouse of an E-MapReduce (EMR) Serverless StarRocks instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of EMR Serverless StarRocks instances. Before you call this operation, take note of the following items:
   * *   You can increase the number of disks only for StarRocks instances of Standard Edition.
   * *   You can increase the number of disks only for warehouses of the standard specifications.
   * *   The instance must be in the Running state.
   * After you increase the number of disks for a warehouse, the billing of disks has the following changes:
   * *   Pay-as-you-go StarRocks instances: You are charged for the disk based on the new disk type.
   * *   Subscription StarRocks instances: You are charged additionally based on the price difference between the number of disks before and after the change and the remaining days of the billing cycle. The billing cycle starts from 00:00 the next day until the end of the subscription period.
   * 
   * @param request - ModifyDiskNumberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDiskNumberResponse
   */
  async modifyDiskNumberWithOptions(request: $_model.ModifyDiskNumberRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDiskNumberResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fastMode)) {
      query["FastMode"] = request.fastMode;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.promotionOptionNo)) {
      query["PromotionOptionNo"] = request.promotionOptionNo;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDiskNumber",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/resourceChange/modifyDiskNumber`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDiskNumberResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDiskNumberResponse({}));
  }

  /**
   * Increases the number of disks for a warehouse of an E-MapReduce (EMR) Serverless StarRocks instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of EMR Serverless StarRocks instances. Before you call this operation, take note of the following items:
   * *   You can increase the number of disks only for StarRocks instances of Standard Edition.
   * *   You can increase the number of disks only for warehouses of the standard specifications.
   * *   The instance must be in the Running state.
   * After you increase the number of disks for a warehouse, the billing of disks has the following changes:
   * *   Pay-as-you-go StarRocks instances: You are charged for the disk based on the new disk type.
   * *   Subscription StarRocks instances: You are charged additionally based on the price difference between the number of disks before and after the change and the remaining days of the billing cycle. The billing cycle starts from 00:00 the next day until the end of the subscription period.
   * 
   * @param request - ModifyDiskNumberRequest
   * @returns ModifyDiskNumberResponse
   */
  async modifyDiskNumber(request: $_model.ModifyDiskNumberRequest): Promise<$_model.ModifyDiskNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyDiskNumberWithOptions(request, headers, runtime);
  }

  /**
   * Modifies the disk performance level for a warehouse of an E-MapReduce (EMR) Serverless StarRocks instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://www.alibabacloud.com/en/product/ecs?_p_lc=1&spm=openapi-amp.newDocPublishment.0.0.47c9281fkIZGiB#pricing) of EMR Serverless StarRocks instances.
   * Before you call this operation, take note of the following items:
   * *   You can modify the disk performance level only for StarRocks instances of Standard Edition.
   * *   You can modify the disk performance level only for warehouses of the standard specifications.
   * *   The instance must be in the Running state.
   * *   You cannot downgrade the performance level to PL0.
   * *   The performance level of an Enterprise SSD (ESSD) is limited by the ESSD disk size. If you cannot upgrade the performance level of an ESSD, expand the ESSD and try again. For more information, see [Enterprise SSDs](https://help.aliyun.com/document_detail/122389.html).
   * After the disk performance level is changed, the billing of the disk has the following changes:
   * *   Pay-as-you-go StarRocks instances: You are charged for the disk based on the new disk type.
   * *   Subscription StarRocks instances: You are charged additionally based on the price difference between the disk performance level before and after the change and the remaining days of the billing cycle. The billing cycle starts from 00:00 the next day until the end of the subscription period.
   * 
   * @param request - ModifyDiskPerformanceLevelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDiskPerformanceLevelResponse
   */
  async modifyDiskPerformanceLevelWithOptions(request: $_model.ModifyDiskPerformanceLevelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDiskPerformanceLevelResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.promotionOptionNo)) {
      query["PromotionOptionNo"] = request.promotionOptionNo;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDiskPerformanceLevel",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/resourceChange/modifyDiskPerformanceLevel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDiskPerformanceLevelResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDiskPerformanceLevelResponse({}));
  }

  /**
   * Modifies the disk performance level for a warehouse of an E-MapReduce (EMR) Serverless StarRocks instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://www.alibabacloud.com/en/product/ecs?_p_lc=1&spm=openapi-amp.newDocPublishment.0.0.47c9281fkIZGiB#pricing) of EMR Serverless StarRocks instances.
   * Before you call this operation, take note of the following items:
   * *   You can modify the disk performance level only for StarRocks instances of Standard Edition.
   * *   You can modify the disk performance level only for warehouses of the standard specifications.
   * *   The instance must be in the Running state.
   * *   You cannot downgrade the performance level to PL0.
   * *   The performance level of an Enterprise SSD (ESSD) is limited by the ESSD disk size. If you cannot upgrade the performance level of an ESSD, expand the ESSD and try again. For more information, see [Enterprise SSDs](https://help.aliyun.com/document_detail/122389.html).
   * After the disk performance level is changed, the billing of the disk has the following changes:
   * *   Pay-as-you-go StarRocks instances: You are charged for the disk based on the new disk type.
   * *   Subscription StarRocks instances: You are charged additionally based on the price difference between the disk performance level before and after the change and the remaining days of the billing cycle. The billing cycle starts from 00:00 the next day until the end of the subscription period.
   * 
   * @param request - ModifyDiskPerformanceLevelRequest
   * @returns ModifyDiskPerformanceLevelResponse
   */
  async modifyDiskPerformanceLevel(request: $_model.ModifyDiskPerformanceLevelRequest): Promise<$_model.ModifyDiskPerformanceLevelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyDiskPerformanceLevelWithOptions(request, headers, runtime);
  }

  /**
   * Expands the disk size for a warehouse of an E-MapReduce (EMR) Serverless StarRocks instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of EMR Serverless StarRocks instances. Before you call this operation, take note of the following items:
   * *   You can expand the disk size only for StarRocks instances of Standard Edition.
   * *   You can expand the disk size only for warehouses of the standard specifications.
   * *   The instance must be in the Running state.
   * After you expand the disk size, the billing of disks has the following changes:
   * *   Pay-as-you-go StarRocks instances: You are charged for the disk based on the new disk size.
   * *   Subscription StarRocks instances: You are charged additionally based on the price difference between the disk size before and after the change and the remaining days of the billing cycle. The billing cycle starts from 00:00 the next day until the end of the subscription period.
   * 
   * @param request - ModifyDiskSizeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDiskSizeResponse
   */
  async modifyDiskSizeWithOptions(request: $_model.ModifyDiskSizeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDiskSizeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.promotionOptionNo)) {
      query["PromotionOptionNo"] = request.promotionOptionNo;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDiskSize",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/resourceChange/modifyDiskSize`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDiskSizeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDiskSizeResponse({}));
  }

  /**
   * Expands the disk size for a warehouse of an E-MapReduce (EMR) Serverless StarRocks instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of EMR Serverless StarRocks instances. Before you call this operation, take note of the following items:
   * *   You can expand the disk size only for StarRocks instances of Standard Edition.
   * *   You can expand the disk size only for warehouses of the standard specifications.
   * *   The instance must be in the Running state.
   * After you expand the disk size, the billing of disks has the following changes:
   * *   Pay-as-you-go StarRocks instances: You are charged for the disk based on the new disk size.
   * *   Subscription StarRocks instances: You are charged additionally based on the price difference between the disk size before and after the change and the remaining days of the billing cycle. The billing cycle starts from 00:00 the next day until the end of the subscription period.
   * 
   * @param request - ModifyDiskSizeRequest
   * @returns ModifyDiskSizeResponse
   */
  async modifyDiskSize(request: $_model.ModifyDiskSizeRequest): Promise<$_model.ModifyDiskSizeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyDiskSizeWithOptions(request, headers, runtime);
  }

  /**
   * Modifies the number of nodes in a warehouse of an E-MapReduce (EMR) Serverless StarRocks instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of EMR Serverless StarRocks instances. Before you call this operation, take note of the following items:
   * *   You can modify the number of nodes in a warehouse of only StarRocks instances of Standard Edition.
   * *   The instance must be in the Running state.
   * *   The number of frontend nodes (FEs) cannot be an even number, and you cannot reduce the number of FE nodes.
   * After you modify the number of nodes in a warehouse, the billing of nodes has the following changes:
   * *   Pay-as-you-go StarRocks instances: You are charged based on the number of nodes.
   * *   Subscription StarRocks instances: You are charged additionally based on the price difference between the number of nodes before and after the change and the remaining days of the billing cycle. The billing cycle starts from 00:00 the next day until the end of the subscription period.
   * 
   * @param request - ModifyNodeNumberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyNodeNumberResponse
   */
  async modifyNodeNumberWithOptions(request: $_model.ModifyNodeNumberRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyNodeNumberResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.promotionOptionNo)) {
      query["PromotionOptionNo"] = request.promotionOptionNo;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyNodeNumber",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/resourceChange/modifyNodeNumber`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyNodeNumberResponse>(await this.callApi(params, req, runtime), new $_model.ModifyNodeNumberResponse({}));
  }

  /**
   * Modifies the number of nodes in a warehouse of an E-MapReduce (EMR) Serverless StarRocks instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of EMR Serverless StarRocks instances. Before you call this operation, take note of the following items:
   * *   You can modify the number of nodes in a warehouse of only StarRocks instances of Standard Edition.
   * *   The instance must be in the Running state.
   * *   The number of frontend nodes (FEs) cannot be an even number, and you cannot reduce the number of FE nodes.
   * After you modify the number of nodes in a warehouse, the billing of nodes has the following changes:
   * *   Pay-as-you-go StarRocks instances: You are charged based on the number of nodes.
   * *   Subscription StarRocks instances: You are charged additionally based on the price difference between the number of nodes before and after the change and the remaining days of the billing cycle. The billing cycle starts from 00:00 the next day until the end of the subscription period.
   * 
   * @param request - ModifyNodeNumberRequest
   * @returns ModifyNodeNumberResponse
   */
  async modifyNodeNumber(request: $_model.ModifyNodeNumberRequest): Promise<$_model.ModifyNodeNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyNodeNumberWithOptions(request, headers, runtime);
  }

  /**
   * Performs a precheck before you modify the number of nodes in a warehouse of an E-MapReduce (EMR) Serverless StarRocks instance.
   * 
   * @param request - ModifyNodeNumberPreCheckRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyNodeNumberPreCheckResponse
   */
  async modifyNodeNumberPreCheckWithOptions(request: $_model.ModifyNodeNumberPreCheckRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyNodeNumberPreCheckResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyNodeNumberPreCheck",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/resourceChange/modifyNodeNumberPreCheck`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyNodeNumberPreCheckResponse>(await this.callApi(params, req, runtime), new $_model.ModifyNodeNumberPreCheckResponse({}));
  }

  /**
   * Performs a precheck before you modify the number of nodes in a warehouse of an E-MapReduce (EMR) Serverless StarRocks instance.
   * 
   * @param request - ModifyNodeNumberPreCheckRequest
   * @returns ModifyNodeNumberPreCheckResponse
   */
  async modifyNodeNumberPreCheck(request: $_model.ModifyNodeNumberPreCheckRequest): Promise<$_model.ModifyNodeNumberPreCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyNodeNumberPreCheckWithOptions(request, headers, runtime);
  }

  /**
   * Queries the versions of an E-MapReduce (EMR) Serverless StarRocks instance that the versions that you can upgrade to. The versions of a StarRocks instance include the major version and minor version. You can view the major version and minor version of a StarRocks instance in the Version Information section of the Instance Details tab in the EMR console. You can call this operation to query the minor versions or major versions that the versions that you can upgrade to.
   * 
   * @param request - QueryUpgradableVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUpgradableVersionsResponse
   */
  async queryUpgradableVersionsWithOptions(request: $_model.QueryUpgradableVersionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryUpgradableVersionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.minor)) {
      query["Minor"] = request.minor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryUpgradableVersions",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/starrocks/queryUpgradableVersions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryUpgradableVersionsResponse>(await this.callApi(params, req, runtime), new $_model.QueryUpgradableVersionsResponse({}));
  }

  /**
   * Queries the versions of an E-MapReduce (EMR) Serverless StarRocks instance that the versions that you can upgrade to. The versions of a StarRocks instance include the major version and minor version. You can view the major version and minor version of a StarRocks instance in the Version Information section of the Instance Details tab in the EMR console. You can call this operation to query the minor versions or major versions that the versions that you can upgrade to.
   * 
   * @param request - QueryUpgradableVersionsRequest
   * @returns QueryUpgradableVersionsResponse
   */
  async queryUpgradableVersions(request: $_model.QueryUpgradableVersionsRequest): Promise<$_model.QueryUpgradableVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryUpgradableVersionsWithOptions(request, headers, runtime);
  }

  /**
   * Releases a pay-as-you-go E-MapReduce (EMR) Serverless StarRocks instance. To unsubscribe from a subscription instance, go to the Unsubscribe page of the Expenses and Costs console.
   * 
   * @remarks
   * *
   * **Warning:** After an instance is released, all physical resources used by the instance are recycled. Relevant data is erased and cannot be restored.
   * 
   * @param request - ReleaseInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseInstanceResponse
   */
  async releaseInstanceWithOptions(request: $_model.ReleaseInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseInstance",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/cluster/release`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseInstanceResponse({}));
  }

  /**
   * Releases a pay-as-you-go E-MapReduce (EMR) Serverless StarRocks instance. To unsubscribe from a subscription instance, go to the Unsubscribe page of the Expenses and Costs console.
   * 
   * @remarks
   * *
   * **Warning:** After an instance is released, all physical resources used by the instance are recycled. Relevant data is erased and cannot be restored.
   * 
   * @param request - ReleaseInstanceRequest
   * @returns ReleaseInstanceResponse
   */
  async releaseInstance(request: $_model.ReleaseInstanceRequest): Promise<$_model.ReleaseInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.releaseInstanceWithOptions(request, headers, runtime);
  }

  /**
   * Restarts an E-MapReduce (EMR) Serverless StarRocks instance.
   * 
   * @remarks
   * This operation is an asynchronous operation. After you call this operation to restart a StarRocks instance, the operation sets the status of the instance to Restarting and begins the restart process. When the status of the instance changes to Running, the instance is restarted.
   * 
   * @param request - RestartInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartInstanceResponse
   */
  async restartInstanceWithOptions(request: $_model.RestartInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RestartInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fastMode)) {
      query["FastMode"] = request.fastMode;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartInstance",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/starrocks/restartCluster`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RestartInstanceResponse({}));
  }

  /**
   * Restarts an E-MapReduce (EMR) Serverless StarRocks instance.
   * 
   * @remarks
   * This operation is an asynchronous operation. After you call this operation to restart a StarRocks instance, the operation sets the status of the instance to Restarting and begins the restart process. When the status of the instance changes to Running, the instance is restarted.
   * 
   * @param request - RestartInstanceRequest
   * @returns RestartInstanceResponse
   */
  async restartInstance(request: $_model.RestartInstanceRequest): Promise<$_model.RestartInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restartInstanceWithOptions(request, headers, runtime);
  }

  /**
   * Modifies the name of an E-MapReduce (EMR) Serverless StarRocks instance.
   * 
   * @param request - UpdateInstanceNameRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceNameResponse
   */
  async updateInstanceNameWithOptions(request: $_model.UpdateInstanceNameRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceNameResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceName",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/cluster/update_name`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceNameResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceNameResponse({}));
  }

  /**
   * Modifies the name of an E-MapReduce (EMR) Serverless StarRocks instance.
   * 
   * @param request - UpdateInstanceNameRequest
   * @returns UpdateInstanceNameResponse
   */
  async updateInstanceName(request: $_model.UpdateInstanceNameRequest): Promise<$_model.UpdateInstanceNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceNameWithOptions(request, headers, runtime);
  }

  /**
   * Upgrades the version of an E-MapReduce (EMR) Serverless StarRocks instance. The versions of a StarRocks instance include the major version and minor version. You can view the major version and minor version of a StarRocks instance in the Version Information section of the Instance Details tab in the EMR console. This operation can be used to upgrade the minor version or major version of a StarRocks instance. You can call the QueryUpgradableVersions operation to query the versions that you can upgrade to.
   * 
   * @remarks
   * The instance must be in the Running state when you call this operation.
   * 
   * @param request - UpgradeVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeVersionResponse
   */
  async upgradeVersionWithOptions(request: $_model.UpgradeVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeVersionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fastMode)) {
      query["FastMode"] = request.fastMode;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.minor)) {
      query["Minor"] = request.minor;
    }

    if (!$dara.isNull(request.targetVersion)) {
      query["TargetVersion"] = request.targetVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeVersion",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/starrocks/upgradeVersion`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeVersionResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeVersionResponse({}));
  }

  /**
   * Upgrades the version of an E-MapReduce (EMR) Serverless StarRocks instance. The versions of a StarRocks instance include the major version and minor version. You can view the major version and minor version of a StarRocks instance in the Version Information section of the Instance Details tab in the EMR console. This operation can be used to upgrade the minor version or major version of a StarRocks instance. You can call the QueryUpgradableVersions operation to query the versions that you can upgrade to.
   * 
   * @remarks
   * The instance must be in the Running state when you call this operation.
   * 
   * @param request - UpgradeVersionRequest
   * @returns UpgradeVersionResponse
   */
  async upgradeVersion(request: $_model.UpgradeVersionRequest): Promise<$_model.UpgradeVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upgradeVersionWithOptions(request, headers, runtime);
  }

}
